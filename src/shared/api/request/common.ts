import { createEffect } from 'effector'

const BASE_URL = process.env.REACT_APP_BASE_URL

type Request = {
  path: string
  method: string
  headers?: Record<string, string>
  body?: object | null | void
}

type Answer<T = unknown> = {
  ok: boolean
  status: number
  body: T
}

const baseRequestFx = createEffect<Request, Answer, Answer>(
  ({ path, method, headers, ...config }) => {
    const body = config.body ? JSON.stringify(config.body) : undefined

    return fetch(`${BASE_URL}${path}`, { headers, body })
  }
)
