const prefix = 'hl'

export interface Props {
  type: 'primary' | 'danger' | 'warning' | 'info' | 'default'
  tag: string
  icon: string
  disabled: boolean
  round: boolean
}

export const buildCls = (props: Props) => {
  let cls = ['flex', 'justify-content', 'items-center', 'gap-2', 'm-1']
  if (props.type) {
    cls.push(`${prefix}-${props.tag}-${props.type}`)
  }
  if (props.disabled) {
    cls.push(`${prefix}-${props.tag}-${props.type}-disabled`)
  }
  if (props.round) {
    cls.push('rounded-full px-2')
  } else {
    cls.push('rounded px-4')
  }
  return cls.join(' ')
}
