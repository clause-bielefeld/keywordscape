import PluginRepository from "../../../domain/repositories/plugin_repository.js";

export default class PluginRepositoryImpl extends PluginRepository {
  constructor(plugin_data_object) {
    super();
    this.plugin_data_object = plugin_data_object;
    console.log('PluginRepositoryImpl successfully constructed/initialized.')
  }

  initialize() {
    console.log("plugin initialized successfuly")
  }

  remove() {
    console.log("plugin removed successfully");
  }

}

