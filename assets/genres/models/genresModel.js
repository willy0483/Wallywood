import { supabase } from "../../../config/configSupabase.js";

/**
 * This class is responsible for handling all the database operations related to the genres table.
 */
export class genresModel {
  /**
   * This class is responsible for handling all the database operations related to the genres table.
   */
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("genres").select("*");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in genresModel.getAllRecords: ", error.message);
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
        .from("genres")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw error;
      }
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error in genresModel.getRecordById: ", error.message);
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
        .from("genres")
        .insert({
          id: formdata.id,
          title: formdata.title,
          slug: formdata.slug,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error in genresModel.createRecord: ", error.message);
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
        .from("genres")
        .update({
          title: formdata.title,
          slug: formdata.slug,
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
      console.error("Error in genresModel.updateRecord: ", error);
    }
  };
  /**
   * delete a genres
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("genres")
        .delete()
        .select("*")
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error in genresModel.deleteRecord: ", error.message);
    }
  };
}
