const uniqid = require('uniqid');
const cubes = [
    {
      id: 'da47ikbuklmz1ycro',
      name: 'Normal Rubik cube',
      description: 'Normal',
      imageUrl: 'https://m.media-amazon.com/images/I/51NQZl6VNzL.jpg',
      difficultyLevel: 1
    },
    {
      id: 'da47ikbuklmz255r3',
      name: 'Rubik cube',
      description: 'Hard to solve cube.',
      imageUrl: 'https://images.interestingengineering.com/images/JULY/Erno_Rubik_Magic_Cube.jpg',
      difficultyLevel: 4
    }
  ];

exports.createCube = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);
    return newCube;
}

exports.getAllCubes = (search, from ,to) => {
    let  filterCubes = [...cubes];

    if(search){
        filterCubes = filterCubes.filter(cube => cube.name.toLowerCase().includes(search));
    }

    if(from){
        filterCubes = filterCubes.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if(to){
        filterCubes = filterCubes.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return filterCubes;
}

exports.getSingleCube = (id) => {
    return cubes.find(cube => cube.id === id);
}