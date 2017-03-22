export function s3Factory(s3: any, bucketName: string) {
  function list(token, callback) {
    const params: any = { Bucket: bucketName };

    if (typeof token === 'function') {
      callback = token;
    } else if (token) {
      params.ContinutationToken = token;
    }

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, {
        token: data.NextContinuationToken,
        keys: data.Contents.map((meta) => meta.Key)
      });
    });
  }

  function put(key, value, callback) {
    s3.putObject({
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(value)
    }, callback);
  }

  function get(key, callback) {
    s3.getObject({
      Bucket: bucketName,
      Key: key
    }, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result.Body.toString('utf-8'));
      }
    });
  }

  return {
    list: list,
    put: put,
    get: get
  };
}
