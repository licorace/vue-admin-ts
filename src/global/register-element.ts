import { App } from "vue"
import {
  Fold,
  Expand,
  Avatar,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  CircleClose
} from "@element-plus/icons-vue"

const components = [
  Fold,
  Expand,
  Avatar,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  CircleClose
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
