exports.handle = async (req, res) => {
    try {
      res.status(200).send("Stupid server is runnning....");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};