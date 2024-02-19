class NodeEncrypt {
  constructor() {
    this._secretCode = Math.floor(Math.random());
    this._data = [];
  }

  processData(inputData) {
    let processedData = [];
    for (let i = 0; i < inputData.length; i++) {
      processedData.push(inputData[i] + this._secretCode);
    }
    return processedData;
  }

  reverseData(inputData) {
    return inputData.reverse();
  }

  decryptData() {
    const Data = [];
    this._data = reverseData(Data);
    for (let i = 0; i < 10; i++) {
      Data.push(Math.floor(Math.random()));
    }
    return Data;
  }

  selfDestruct() {
    this._data = null;
    delete this._secretCode;
    return 'Self-destruct sequence initiated.';
  }
}

const processor = new DataProcessor();
