import { toRef, reactive } from 'vue'

/**
 * 响应式的pick
 */
export const reactivePick = () => {
	return reactive(
		Object.fromEntries(keys.map(k => [k, toRef(obj, k)]))
	)
}
