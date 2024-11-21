import { supabase } from "../../../config/configSupabase.js";

/**
 * This class is responsible for handling all the database operations related to the genreposterrel table.
 */
export class genreposterrelModel {
  /**
   * This class is responsible for handling all the database operations related to the genreposterrel table.
   */
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("genreposterrel").select("*");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(
        "Error in genreposterrelModel.getAllRecords: ",
        error.message
      );
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
        .from("genreposterrel")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }
      console.log(data);

      return data;
    } catch (error) {
      console.error(
        "Error in genreposterrelModel.getRecordById: ",
        error.message
      );
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
        .from("genreposterrel")
        .insert({
          id: formdata.id,
          genre_id: formdata.genre_id,
          poster_id: formdata.poster_id,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(
        "Error in genreposterrelModel.createRecord: ",
        error.message
      );
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
        .from("genreposterrel")
        .update({
          genre_id: formdata.genre_id,
          poster_id: formdata.poster_id,
        })
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw error;
      }
      console.log(data);
      console.log("formdata:", formdata);
      return data;
    } catch (error) {
      console.error("Error in genreposterrelModel.updateRecord: ", error);
    }
  };
  /**
   * delete a genreposterrel
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("genreposterrel")
        .delete()
        .select("*")
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error(
        "Error in genreposterrelModel.deleteRecord: ",
        error.message
      );
    }
  };
}
