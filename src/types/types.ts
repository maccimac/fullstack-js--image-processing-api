export interface Status {
  status?: string
  status_mesage?: string
}

export interface QueryPayload {
  filename?: string
  srcImg?: string
  height?: string | number
  width?: string | number
}

export type QueryStatus = QueryPayload & Status
