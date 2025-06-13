export const NewClassFormInitialValues = (objInfo=undefined) => ({
    id: objInfo?.id || undefined,
    name: objInfo?.name || "",
    url: objInfo?.url || "",
    public: objInfo?.public ? 1 : 0,
    visible: objInfo?.visible ? 1 : 0,
    certificateLevel: objInfo?.certificateLevel || 0,
    dateCreated: objInfo?.dateCreated || new Date().toUTCString(),
  }
);