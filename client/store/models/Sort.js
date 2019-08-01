import { Model } from "@vuex-orm/core";

export default class Sort extends Model {
  static entity = "sorts";

  static fields () {
    return {
      id: this.string(""),
      name: this.string(""),
      description: this.string(""),
      image: this.string(""),
      type: this.string(""),
      cbd: this.number(0),
      thc: this.number(0),
      effects: this.string(""),
      flavor: this.string("")
    };
  }

  static methodConf = {
    methods: {
      $update: {
        http: {
          method: "patch"
        }
      }
    }
  };
}
