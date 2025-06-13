export const NewMonitorCenterFormInitialValues = (objInfo) => ({
    id: objInfo?.id || undefined,
    userName: objInfo?.userName || "",
    password: objInfo?.password || "",
    email: objInfo?.email || "",
    location: objInfo?.location || "",
    dateCreated: objInfo?.dateCreated || new Date().toUTCString(),
    certificateLevel: objInfo?.certificateLevel || 0,
    active: objInfo?.active ? 1 : 0,
  }
);