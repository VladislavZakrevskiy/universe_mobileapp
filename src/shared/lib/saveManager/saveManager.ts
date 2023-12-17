import AsyncStorage from "@react-native-async-storage/async-storage";

interface SaveItem {
  key: string;
  value: unknown;
}

export class SaveManager {
  static async save(key: string, data: unknown) {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonData);
    } catch (e) {
      console.log(e);
    }
  }

  static async saveMany(...data: SaveItem[]) {
    try {
      for (let i = 0; i < data.length; i++) {
        const jsonData = JSON.stringify(data[i].value);
        await AsyncStorage.setItem(data[i].key, jsonData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  static async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  static async removeMany(keys: string[]) {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log(e);
    }
  }

  static async removeAll() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await this.removeMany(keys as string[]);
    } catch (e) {
      console.log(e);
    }
  }

  static async get(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) {
        return undefined;
      }
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
  }

  static async getMany(keys: string[]) {
    try {
      const savedData = [];
      const data = await AsyncStorage.multiGet(keys);
      for (let i = 0; i < data.length; i++) {
        if (data[i][1] !== null) {
          savedData.push([data[i][0], JSON.parse(data[i][1]!)]);
        } else {
          savedData.push([data[i][0], undefined]);
        }
      }
      return;
    } catch (e) {
      console.log(e);
    }
  }

  static async getAll() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const data = this.getMany(keys as string[]);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
