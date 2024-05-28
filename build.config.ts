import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index.tsx'],
  outDir: 'lib',
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
