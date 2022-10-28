// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const config = getDefaultConfig(__dirname)
config.resolver = {
  blacklistRE: exclusionList([/assets\/videos\/.*/])
}

module.exports = config
