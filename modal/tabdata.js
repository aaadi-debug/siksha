import mongoose from 'mongoose';

// Define the schema for colleges
const CollegeSchema = new mongoose.Schema({
  ranking: { type: String, required: true },
  college_name: { type: String, required: true },
  cut_off: { type: String, required: true },
  deadline: { type: String, required: true },
  college_fees: { type: String, required: true }
});

// Define the schema for tabs
const TabSchema = new mongoose.Schema({
  eventkey: { type: String, required: true },
  classname: { type: String, required: true },
  title: { type: String, required: true },
  colleges: [CollegeSchema]
});

// Create or use the existing model
const TabData = mongoose.models.tabdata || mongoose.model('tabdata', TabSchema);

export default TabData;
