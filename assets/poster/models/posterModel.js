import { supabase } from "../../config/configSupabase.js";

/**
 * This class is responsible for handling all the database operations related to the posters table.
 */
export class posterModel {
  /**
   * This class is responsible for handling all the database operations related to the posters table.
   */
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("poster").select("*");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in posterModel.getAllRecords: ", error.message);
    }
  }

  /**
   * Function get single Record By Id
   * @param {number} id
   * @returns object
   */
  static async getRecordById(id) {
    try {
      const { data, error } = await supabase
        .from("poster")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in posterModel.getRecordById: ", error.message);
    }
  }

  /**
   * Function createRecord
   * @param {object} formdata
   * @returns {object}
   */
  static createRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("poster")
        .insert({
          id: formdata.id,
          name: formdata.name,
          slug: formdata.slug,
          description: formdata.description,
          image: formdata.image,
          width: formdata.width,
          height: formdata.height,
          price: formdata.price,
          stock: formdata.stock,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in posterModel.createRecord: ", error.message);
    }
  };

  /**
   * Function updateRecord
   * @param {object} formdata
   * @returns {object}
   */
  static updateRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("poster")
        .update({
          name: formdata.name,
          slug: formdata.slug,
          description: formdata.description,
          image: formdata.image,
          width: formdata.width,
          height: formdata.height,
          price: formdata.price,
          stock: formdata.stock,
        })
        .eq("id", formdata.id)
        .select()
        .single();
      if (error) {
        throw error;
      }
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error in posterModel.updateRecord: ", error);
    }
  };
}
