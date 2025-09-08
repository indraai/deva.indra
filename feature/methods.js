export default {
  /**************
  method: indra
  params: packet
  describe: The global wall feature that installs with every agent
  ***************/
  async indra(packet) {
    const indra = await this.methods.sign('indra', 'default', packet);
    return indra;
  },
};
