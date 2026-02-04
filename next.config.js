import nextBuildId from "next-build-id";

const buildId = await nextBuildId();

const config = {
  generateBuildId: () => buildId,
  env: { NEXT_PUBLIC_BUILD_ID: buildId },
};

export default config;
