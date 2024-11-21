import { supabase } from "../../../config/configSupabase.js";

/**
 * This class is responsible for handling all the database operations related to the userratings table.
 */
export class userratingsModel {
  /**
   * This class is responsible for handling all the database operations related to the userratings table.
   */
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("userratings").select("*");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in userratingsModel.getAllRecords: ", error.message);
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
        .from("userratings")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error in userratingsModel.getRecordById: ", error.message);
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
        .from("userratings")
        .insert({
          user_id: formdata.user_id,
          poster_id: formdata.poster_id,
          num_stars: formdata.num_stars,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in userratingsModel.createRecord: ", error.message);
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
        .from("userratings")
        .update({
          user_id: formdata.user_id,
          poster_id: formdata.poster_id,
          num_stars: formdata.num_stars,
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
      console.error("Error in userratingsModel.updateRecord: ", error);
    }
  };
  /**
   * delete a userratings
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("userratings")
        .delete()
        .select("*")
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error in userratingsModel.deleteRecord: ", error.message);
    }
  };
}
