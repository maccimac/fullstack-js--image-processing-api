export interface Status {
  status: string
  status_message?: (string | undefined | unknown)
  data?: (string | undefined | unknown)
}

export interface QueryPayload {
  filename?: (string | undefined | unknown)
  height?: (string | undefined | unknown)
  width?: (string | undefined | unknown)
}

export type QueryStatus = QueryPayload & Status
