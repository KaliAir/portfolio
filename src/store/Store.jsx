import create from 'zustand'


export const employeerStore = create((set)=>({
	empData: [],
	formData:(data)=> {
		set((state)=>({
			empData: [data,...state.empData]
		}))
	}
}))