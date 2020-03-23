export const CONFIG_DIR_NAME = 'config'
export const DEFAULT_CONFIG_FILE = 'index.js'

export const PRESET_PREFIX = '@tarojs/preset-'
export const PLUGIN_PREFIX = '@tarojs/plugin-'

export const IS_EVENT_HOOK = /^on/

export const presetOrPluginPrefixReg = new RegExp(`^${PRESET_PREFIX}|${PLUGIN_PREFIX}`)

export enum PluginType  {
  Preset = 'Preset',
  Plugin = 'Plugin'
}

export const PluginNamePrefix = {
  [PluginType.Preset]: PLUGIN_PREFIX,
  [PluginType.Plugin]: PLUGIN_PREFIX
}
