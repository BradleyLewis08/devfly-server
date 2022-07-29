import { enumType } from "nexus";
import { TECHNOLGIES } from "./constants";

export const Technology = enumType({
	name: 'Technology',
	members: TECHNOLGIES
})