export const STATUS = {
  PASSED: "PASSED",
  FAILED: "FAILED",
  BROKEN: "BROKEN",
  COMPROMISED: "COMPROMISED",
  SKIPPED: "SKIPPED",
  PENDING: "PENDING",
};

export const STATUS_META = {
  PASSED: {
    label: "Passed",
    color: "pass",
  },
  FAILED: {
    label: "Failed",
    color: "fail",
  },
  BROKEN: {
    label: "Broken",
    color: "danger",
  },
  COMPROMISED: {
    label: "Compromised",
    color: "warning",
  },
  SKIPPED: {
    label: "Skipped",
    color: "info",
  },
  PENDING: {
    label: "Pending",
    color: "pending",
  },
};
