const getData = async (api) => {
  try {
    const data = await fetch(api);
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

const createOrChangeData = async (api, method, data) => {
  try {
    const response = await fetch(api, {
      method,
      body: new URLSearchParams({ ...data }),
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const uploadImage = async (api, type, file) => {
  try {
    const formData = new FormData();
    formData.append(type, file);

    const req = await fetch(api, {
      method: "post",
      body: formData,
    });

    return req.json();
  } catch (error) {
    console.error(error);
  }
};

export { uploadImage, createOrChangeData, getData };
