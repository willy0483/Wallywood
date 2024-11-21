import { supabase } from "../../../config/configSupabase.js";

/**
 * This class is responsible for handling all the database operations related to the userprofiles table.
 */
export class userprofilesModel {
  /**
   * This class is responsible for handling all the database operations related to the userprofiles table.
   */
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("userprofiles").select("*");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(
        "Error in userprofilesModel.getAllRecords: ",
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
        .from("userprofiles")
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
        "Error in userprofilesModel.getRecordById: ",
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
        .from("userprofiles")
        .insert({
          user_id: formdata.user_id,
          firstname: formdata.firstname,
          lastname: formdata.lastname,
          birthdate: formdata.birthdate,
          gender: formdata.gender,
          position: formdata.position,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in userprofilesModel.createRecord: ", error.message);
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
        .from("userprofiles")
        .update({
          user_id: formdata.user_id,
          firstname: formdata.firstname,
          lastname: formdata.lastname,
          birthdate: formdata.birthdate,
          gender: formdata.gender,
          position: formdata.position,
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
      console.error("Error in userprofilesModel.updateRecord: ", error);
    }
  };
  /**
   * delete a userprofiles
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("userprofiles")
        .delete()
        .select("*")
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error in userprofilesModel.deleteRecord: ", error.message);
    }
  };
}
