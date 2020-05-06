const verifyConditions = [
  ['@semantic-release/changelog'],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'docs/CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  ['@semantic-release/github']
]

const analyzeCommits = [[
  '@semantic-release/commit-analyzer',
  {
    preset: 'angular',
    parserOpts: {
      'noteKeywords': ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
    },
    releaseRules: [
      { breaking: true, release: 'major' },
      { revert: true, release: 'patch' },
      // MINOR
      { type: 'feat', release: 'minor' },
      // PATCH
      { type: 'fix', release: 'patch' },
      { type: 'perf', release: 'patch' },
      { type: 'revert', release: 'patch' },
      { type: 'style', release: 'patch' },
      { type: 'improvement', release: 'patch' },

      // NO RELEASE
      { type: 'ci', release: false },
      { type: 'docs', release: false },
      { type: 'build', release: false },
      { type: 'test', release: false },
      { type: 'refactor', release: false },
      { type: 'chore', release: false }
    ]
  }
]]

const generateNotes = [[
  '@semantic-release/release-notes-generator',
  {
    preset: 'angular',
    'parserOpts': {
      'noteKeywords': ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
    },
    writerOpts: {
      'commitsSort': ['subject', 'scope']
    },
    presetConfig: {
      types: [
        { type: 'feat', section: '🧩 Features' },
        { type: 'fix', section: '🔧 Fixes' },

        { type: 'chore', section: '💉 Improvements' },
        { type: 'perf', section: '💉 Improvements' },
        { type: 'refactor', section: '💉 Improvements' },
        { type: 'improvement', section: '💉 Improvements' },
        { type: 'style', section: '💉 Improvements' },

        { type: 'docs', section: '📝 Docs' },

        { type: 'ci', section: '⚙ Internals', hidden: true },
        { type: 'build', section: '⚙ Internals', hidden: true },
        { type: 'chore', section: '⚙ Internals', hidden: true },
        { type: 'test', section: '⚙ Internals', hidden: true }
      ]
    }
  }
]]

const prepare = [
  '@semantic-release/changelog',
  ['@semantic-release/npm', {
    'npmPublish': false
  }],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'docs/CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ]
]

// skipped steps
const publish = []
const verifyRelease = []
const fail = []
const success = []
const addChannel = []

module.exports = {
  repositoryUrl: 'https://github.com/njausteve/resume-v2.git',
  branches: ['master'],
  verifyConditions,
  analyzeCommits,
  verifyRelease,
  generateNotes,
  prepare,
  publish,
  fail,
  success,
  addChannel
}
