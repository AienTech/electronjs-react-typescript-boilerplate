export interface iRoute {
	title: string;
	path: string;
}

interface iRoutes {
	HOME: iRoute;
}

export const routes: iRoutes = {
	HOME: {
		path: '/',
		title: 'Home',
	},
};
