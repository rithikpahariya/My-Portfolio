export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Cal.com",
    contibutionDescription:
      "Improved React-based booking UI by fixing timezone edge cases and optimizing calendar re-renders, resulting in smoother scheduling flows and better UX for international users.",
    repoOwner: "Cal.com (Open Source)",
    link: "https://github.com/novuhq/novu/pull/ZZZZ",
  },
  {
    repo: "novu",
    contibutionDescription:
      "Refactored the workflow engine components, reducing bundle size and improving developer experience with clearer type definitions and error handling.",
    repoOwner: "Novu (Open Source)",
    link: "https://github.com/novuhq/novu/pull/ZZZZ",
  },
  {
    repo: "Payload CMS",
    contibutionDescription:
      "Optimized GraphQL-powered UI screens using better state management patterns, reducing load times and improving error handling.",
    repoOwner: "Payload CMS (Open Source)",
    link: "https://github.com/novuhq/novu/pull/BBBB",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
