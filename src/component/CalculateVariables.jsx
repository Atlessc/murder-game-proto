// Define a generic calculation function for weapon variables
const calculateWeaponVariable = (probability, dependencies, variables) => {
    // Check if any dependencies are false
    const dependencyFalse = dependencies.some(
      dependency => !variables[dependency.variableID]
    );

    // Adjust probability based on dependencies
    if (dependencyFalse) {
      probability *= dependencies.find(
        dependency => !variables[dependency.variableID]
      ).ifFalse;
    }

    // Calculate variable value based on adjusted probability
    return Math.random() < probability;
  };

  // ...

  // Initialize game on mount
  useEffect(() => {
    // Read in data from JSON files
    const characters = gameData.characters;
    let weapons = gameData.weapons;
    const rooms = gameData.rooms;
  
    // Calculate weapon variables
    weapons = weapons.map(weapon => {
      const variables = weapon.variables.reduce((acc, variable) => {
        acc[variable.id] = calculateWeaponVariable(
          variable.probability,
          variable.contextualDependencies,
          acc
        );
        return acc;
      }, {});
      return { ...weapon, variables };
    });
}, []

  );

  