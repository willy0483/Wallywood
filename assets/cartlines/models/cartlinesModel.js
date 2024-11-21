import { supabase } from "../../../config/configSupabase.js";

/**
 * This class is responsible for handling all the database operations related to the cartlines table.
 */
export class cartlinesModel {
  /**
   * This class is responsible for handling all the database operations related to the cartlines table.
   */
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("cartlines").select("*");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in cartlinesModel.getAllRecords: ", error.message);
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
        .from("cartlines")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error in cartlinesModel.getRecordById: ", error.message);
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
        .from("cartlines")
        .insert({
          user_id: formdata.user_id,
          poster_id: formdata.poster_id,
          quantity: formdata.quantity,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in cartlinesModel.createRecord: ", error.message);
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
        .from("cartlines")
        .update({
          user_id: formdata.user_id,
          poster_id: formdata.poster_id,
          quantity: formdata.quantity,
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
      console.error("Error in cartlinesModel.updateRecord: ", error);
    }
  };
  /**
   * delete a cartlines
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("cartlines")
        .delete()
        .select("*")
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error in cartlinesModel.deleteRecord: ", error.message);
    }
  };
}
