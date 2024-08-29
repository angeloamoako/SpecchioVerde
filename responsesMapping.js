const tree = {
    feature1: ["Oak", "Pine", "Maple", "Birch"], 
    feature2: ["Short", "Medium", "Tall", "Very Tall"], 
    feature3: ["Needle", "Broadleaf", "Compound", "Simple"], 
    feature4: ["Young", "Mature", "Old", "Ancient"],
    feature5: ["Brown", "Gray", "Red", "White"], 
    feature6: ["Tropical", "Temperate", "Subarctic", "Desert"], 
    feature7: ["Berry", "Nut", "Seed", "None"], 
    feature8: ["Shallow", "Moderate", "Deep", "Very Deep"], 
    feature9: ["Slow", "Moderate", "Fast", "Very Fast"], 
    feature10: ["Forest", "Mountain", "Wetland", "Savannah"] 
};

//given an array of responses it creates an according tree description
function createTreeDescription(givenResponsesList){
    const featuresDescription = [
        'create a tree of feature1' + tree.feature1[givenResponsesList[0]],
        'create a tree of feature2' + tree.feature2[givenResponsesList[1]],
        'create a tree of feature3' + tree.feature3[givenResponsesList[2]],
        'create a tree of feature4' + tree.feature4[givenResponsesList[3]],
        'create a tree of feature5' + tree.feature5[givenResponsesList[4]],
        'create a tree of feature6' + tree.feature6[givenResponsesList[5]],
        'create a tree of feature7' + tree.feature7[givenResponsesList[6]],
        'create a tree of feature8' + tree.feature8[givenResponsesList[7]],
        'create a tree of feature9' + tree.feature9[givenResponsesList[8]],
        'create a tree of feature10' + tree.feature10[givenResponsesList[9]]
    ]

    let finalDescription = ''

    for (let i = 0; i <= 10; i++) {
        finalDescription += featuresDescription[i];
    }

    return finalDescription;
      
}

//calls the text to image api after retrieving the tree description from the previous function
export function callTextToImageApi(givenResponsesList){   
    console.log('method call test');
    console.log(givenResponsesList);
    createTreeDescription(givenResponsesList);

    //api call:
}
  