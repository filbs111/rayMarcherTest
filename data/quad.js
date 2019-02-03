var quadData = {
	vertices: [-1,-1,0,-1,1,0,1,-1,0,1,1,0],
	
	/*
	vertices: [-1,-1,0,
				-1,2,0,
				2,-1,0,
				2,2,0],	//why needs scaling for fullscren? some bug???? still doesn't draw outside box???
				*/
	normals: [0,0,1,0,0,1,0,0,1,0,0,1],	//TODO don't use this unless have to
	uvcoords: [0,0,0,1,1,0,1,1],
	indices: [0,2,1,1,2,3]	//TODO indexed strip for efficiency
	//indices: [0,2,1]	//TODO indexed strip for efficiency
};