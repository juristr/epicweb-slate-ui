import { releaseVersion, releaseChangelog, releasePublish } from "nx/release";

(async () => {
  const { workspaceVersion, projectsVersionData } = await releaseVersion({});

  await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
  });

  const publishResult = await releasePublish({});

  process.exit(
    Object.values(publishResult).every((result) => result.code === 0) ? 0 : 1
  );
})();
