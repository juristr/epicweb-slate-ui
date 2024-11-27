import { releaseVersion, releaseChangelog, releasePublish } from "nx/release";
import * as fs from "fs-extra";
import * as path from "path";

async function copyPackagesToBuild() {
  const buildDir = path.join(process.cwd(), "build");
  const packagesDir = path.join(process.cwd(), "packages");

  // Remove build directory if it exists and create it fresh
  await fs.remove(buildDir);
  await fs.ensureDir(buildDir);
  await fs.ensureDir(path.join(buildDir, "packages"));

  // Get all package directories
  const packageDirs = await fs.readdir(packagesDir);

  // Copy each package directory
  for (const pkg of packageDirs) {
    const srcDir = path.join(packagesDir, pkg);
    const destDir = path.join(buildDir, "packages", pkg);

    // Only copy if it's a directory
    const stats = await fs.stat(srcDir);
    if (!stats.isDirectory()) continue;

    await fs.copy(srcDir, destDir, {
      filter: (src) => {
        // Skip node_modules, test files, and dist folders
        return (
          !src.includes("node_modules") &&
          !src.includes("__tests__") &&
          !src.includes("dist")
        );
      },
    });
  }
}

(async () => {
  await copyPackagesToBuild();

  // const { workspaceVersion, projectsVersionData } = await releaseVersion({});

  // await releaseChangelog({
  //   versionData: projectsVersionData,
  //   version: workspaceVersion,
  // });

  // const publishResult = await releasePublish({});

  // process.exit(
  //   Object.values(publishResult).every((result) => result.code === 0) ? 0 : 1
  // );
})();
