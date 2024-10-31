import React, {useState} from 'react';
import { StyleSheet, Button, TextInput, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';
import MapView, { Marker } from 'react-native-maps';

function AboutUs({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('./images/logo.png')} />
      </View>
      <Text style={styles.title}>About Us</Text>
      <Text>The SME is an initiative by Precious Radebe to provide skills training for domestic workers and gardeners. Her parents and other elderly relatives
		were never given the chance to upskill themselves or follow a formal educational qualification, so this training school is her way of supporting
		similarly affected members from her community. The training she provides upskills domestic workers and gardeners by making them more
		marketable when seeking employment and enables them to be paid at a higher rate because of these additional skills. They can also be entrepreneurs
		and setup their own small business utilising these newly obtained skills. Many employers would like to have their employees upskilled to offer
		more skilled services to the household. Customers (employers or employees) can select from a range of courses available. They can select more than
		one course. They more courses the customers select the more discount they receive.</Text>
    <View style={styles.buttonContainer}>
          <View style={styles.buttonSpacing}>
            <Button
              title="SIX-MONTH COURSES"
              color="red"
              onPress={() => navigation.navigate('6Months')}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              title="SIX-WEEK COURSES"
              color="red"
              onPress={() => navigation.navigate('6Weeks')}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              title="FEES"
              color="red"
              onPress={() => navigation.navigate('Fees')}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              title="CONTACT"
              color="red"
              onPress={() => navigation.navigate('Contact')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function SixMonthCourses({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Six Month Courses</Text>
    <View style={styles.buttonContainer}>
      <View style={styles.buttonSpacing}>
        <Button title="FIRST AID" color="red" onPress={() => navigation.navigate('FirstAid')} />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="SEWING" color="red" onPress={() => navigation.navigate('Sewing')} />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="LANDSCAPING" color="red" onPress={() => navigation.navigate('Landscaping')} />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="LIFE SKILLS" color="red" onPress={() => navigation.navigate('LifeSkills')} />
      </View>
    </View>
  </View>
  );
}

function SixWeekCourses({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six Week Courses</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacing}>
          <Button title="CHILD MINDING" color="red" onPress={() => navigation.navigate('ChildMinding')} />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title="COOKING" color="red" onPress={() => navigation.navigate('Cooking')} />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title="GARDEN MAINTENANCE" color="red" onPress={() => navigation.navigate('Maintenance')} />
        </View>
      </View>
    </View>
  );
}

function FirstAid({navigation}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const sixMonthCourses = [
    { name: 'First Aid', route: 'FirstAid' },
    { name: 'Sewing', route: 'Sewing' },
    { name: 'Landscaping', route: 'Landscaping' },
    { name: 'Life Skills', route: 'LifeSkills' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>First Aid</Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {sixMonthCourses.map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setDropdownVisible(false);
                navigation.navigate(course.route);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>{course.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    <View style={styles.mainPicture}>
      <Image style={styles.ImageSize} source={require('./images/firstaid.jpeg')} />
    </View>
    <Text>
      <Text style={{ fontWeight: 'bold' }}>Fees:</Text> R1500
    </Text>
    <Text>
      <Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To provide first aid awareness and basic life support
    </Text>
    <Text style={{ fontWeight: 'bold' }}>Content:</Text>
    <Text>• Wounds and bleeding</Text>
    <Text>• Burns and fractures</Text>
    <Text>• Emergency scene management</Text>
    <Text>• Cardio-Pulmonary Resuscitation (CPR)</Text>
    <Text>• Respiratory distress e.g., Choking, blocked airway</Text>
  </View>
);
}

function Sewing({navigation}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const sixMonthCourses = [
    { name: 'First Aid', route: 'FirstAid' },
    { name: 'Sewing', route: 'Sewing' },
    { name: 'Landscaping', route: 'Landscaping' },
    { name: 'Life Skills', route: 'LifeSkills' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Sewing</Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {sixMonthCourses.map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setDropdownVisible(false);
                navigation.navigate(course.route);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>{course.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./images/sewing.jpeg')} />
      </View>
      <Text><Text style={{ fontWeight: 'bold' }}>Fees:</Text> R1500</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To provide alterations and new garment tailoring services</Text>
      <Text style={{ fontWeight: 'bold' }}>Content:</Text>
      <Text>• Types of stitches</Text>
      <Text>• Threading a sewing machine</Text>
      <Text>• Sewing buttons, zips, hems and seams</Text>
      <Text>• Alterations</Text>
      <Text>• Designing and sewing new garments</Text>
    </View>
  );
}

function Landscaping({navigation}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const sixMonthCourses = [
    { name: 'First Aid', route: 'FirstAid' },
    { name: 'Sewing', route: 'Sewing' },
    { name: 'Landscaping', route: 'Landscaping' },
    { name: 'Life Skills', route: 'LifeSkills' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Landscaping</Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {sixMonthCourses.map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setDropdownVisible(false);
                navigation.navigate(course.route);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>{course.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    <View style={styles.mainPicture}>
      <Image style={styles.ImageSize} source={require('./images/landscaping.jpeg')} />
    </View>
    <Text><Text style={{ fontWeight: 'bold' }}>Fees:</Text> R1500</Text>
    <Text><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To provide landscaping services for new and established gardens</Text>
    <Text style={{ fontWeight: 'bold' }}>Content:</Text>
    <Text>• Indigenous and exotic plants and trees</Text>
    <Text>• Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
    <Text>• Balancing of plants and trees in a garden</Text>
    <Text>• Aesthetics of plant shapes and colours</Text>
    <Text>• Garden layout</Text>
  </View>
);
}

function LifeSkills({navigation}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const sixMonthCourses = [
    { name: 'First Aid', route: 'FirstAid' },
    { name: 'Sewing', route: 'Sewing' },
    { name: 'Landscaping', route: 'Landscaping' },
    { name: 'Life Skills', route: 'LifeSkills' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Life Skills</Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {sixMonthCourses.map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setDropdownVisible(false);
                navigation.navigate(course.route);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>{course.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    <View style={styles.mainPicture}>
      <Image style={styles.ImageSize} source={require('./images/lifeskills.jpeg')} />
    </View>
    <Text><Text style={{ fontWeight: 'bold' }}>Fees:</Text> R1500</Text>
    <Text><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To provide life skills training for daily living and literacy improvement</Text>
    <Text style={{ fontWeight: 'bold' }}>Content:</Text>
    <Text>• Opening a bank account</Text>
    <Text>• Basic labour law (know your rights)</Text>
    <Text>• Basic reading and writing literacy</Text>
    <Text>• Basic numeric literacy</Text>
  </View>
);
}

function ChildMinding() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Child Minding</Text>
    <View style={styles.mainPicture}>
      <Image style={styles.ImageSize} source={require('./images/childminding.jpeg')} />
    </View>
    <Text><Text style={{ fontWeight: 'bold' }}>Fees:</Text> R750</Text>
    <Text><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To provide basic child and baby care</Text>
    <Text style={{ fontWeight: 'bold' }}>Content:</Text>
    <Text>• Birth to six-month-old baby needs</Text>
    <Text>• Seven-month to one-year-old needs</Text>
    <Text>• Toddler needs</Text>
    <Text>• Educational toys</Text>
  </View>
);
}

function Cooking() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cooking</Text>
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./images/cooking.jpeg')} />
      </View>
      <Text><Text style={{ fontWeight: 'bold' }}>Fees:</Text> R750</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To prepare and cook nutritious family meals</Text>
      <Text style={{ fontWeight: 'bold' }}>Content:</Text>
      <Text>• Nutritional requirements for a healthy body</Text>
      <Text>• Types of protein, carbohydrates, and vegetables</Text>
      <Text>• Planning meals</Text>
      <Text>• Preparation and cooking of meals</Text>
    </View>
  );
}

function GardenMaintenance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garden Maintenance</Text>
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./images/gardenmaintenance.jpeg')} />
      </View>
      <Text><Text style={{ fontWeight: 'bold' }}>Fees:</Text> R750</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> To provide basic knowledge of watering, pruning and planting in a domestic garden</Text>
      <Text style={{ fontWeight: 'bold' }}>Content:</Text>
      <Text>• Water restrictions and the watering requirements of indigenous and exotic plants</Text>
      <Text>• Pruning and propagation of plants</Text>
      <Text>• Planting techniques for different plant types</Text>
    </View>
  );
}

function Fees() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  // Independent state for each checkbox
  const [isFirstAidChecked, setFirstAidChecked] = useState(false);
  const [isSewingChecked, setSewingChecked] = useState(false);
  const [isLandscapingChecked, setLandscapingChecked] = useState(false);
  const [isLifeSkillsChecked, setLifeSkillsChecked] = useState(false);
  const [isChildMindingChecked, setChildMindingChecked] = useState(false);
  const [isCookingChecked, setCookingChecked] = useState(false);
  const [isGardenMaintenanceChecked, setGardenMaintenanceChecked] = useState(false);

  // Fees calculation based on selected courses
  const calculateTotalFees = () => {
    let total = 0;
    if (isFirstAidChecked) total += 1500;
    if (isSewingChecked) total += 1500;
    if (isLandscapingChecked) total += 1500;
    if (isLifeSkillsChecked) total += 1500;
    if (isChildMindingChecked) total += 750;
    if (isCookingChecked) total += 750;
    if (isGardenMaintenanceChecked) total += 750;

    // Apply discount if more than 1 course selected
    const numberOfCourses = [isFirstAidChecked, isSewingChecked, isLandscapingChecked, isLifeSkillsChecked, isChildMindingChecked, isCookingChecked, isGardenMaintenanceChecked].filter(Boolean).length;
    if (numberOfCourses > 1) {
      total *= 0.9; // 10% discount
    }

    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Fees</Text>
      <View style={styles.container}>  

        <View style={styles.inputContainer}> 
            <TextInput 
              style={styles.input} 
              placeholder="Enter Name" 
              value={name} 
              onChangeText={setName} 
            /> 
        </View>

        <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter Surname" 
              value={surname} 
              onChangeText={setSurname} 
            />
        </View>

        <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter Email" 
              value={email} 
              onChangeText={setEmail} 
            />
        </View>

        {/* Independent checkboxes for each course */}
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isFirstAidChecked} onValueChange={setFirstAidChecked} />
          <Text> First Aid (R1500)</Text>
        </View>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isSewingChecked} onValueChange={setSewingChecked} />
          <Text> Sewing (R1500)</Text>
        </View>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isLandscapingChecked} onValueChange={setLandscapingChecked} />
          <Text> Landscaping (R1500)</Text>
        </View>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isLifeSkillsChecked} onValueChange={setLifeSkillsChecked} />
          <Text> Life Skills (R1500)</Text>
        </View>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isChildMindingChecked} onValueChange={setChildMindingChecked} />
          <Text> Child Minding (R750)</Text>
        </View>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isCookingChecked} onValueChange={setCookingChecked} />
          <Text> Cooking (R750)</Text>
        </View>
        <View style={styles.row}>
          <Checkbox style={styles.checkbox} value={isGardenMaintenanceChecked} onValueChange={setGardenMaintenanceChecked} />
          <Text> Garden Maintenance (R750)</Text>
        </View>

        {/* Total fees display */}
        <Text style={styles.title}>Total Fees: R{calculateTotalFees()}</Text>
      </View>
    </View>
  );
}

function Contact() {
  // Define locations with their coordinates
  const locations = [
    { name: '123 Elm St, Johannesburg Central', latitude: -26.2041, longitude: 28.0473 },
    { name: '456 Oak St, Sandton', latitude: -26.1076, longitude: 28.0567 },
    { name: '789 Pine St, Randburg', latitude: -26.1459, longitude: 27.9980 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Phone</Text>: 123-456-7890</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Email</Text>: info@empoweringthenation.com</Text>
      <Text style={{ fontWeight: 'bold' }}>Our Venues in Johannesburg:</Text>
      
      {locations.map((location, index) => (
        <View key={index} style={styles.mapContainer}>
          <Text>{location.name}</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.05, // Zoom level
              longitudeDelta: 0.05, // Zoom level
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.name}
            />
          </MapView>
        </View>
      ))}
    </View>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About Us">
        <Stack.Screen name="Home" component={AboutUs} />
        <Stack.Screen name="6Months" component={SixMonthCourses} />
        <Stack.Screen name="6Weeks" component={SixWeekCourses} />
        <Stack.Screen name="FirstAid" component={FirstAid} />
        <Stack.Screen name="Sewing" component={Sewing} />
        <Stack.Screen name="Landscaping" component={Landscaping} />
        <Stack.Screen name="LifeSkills" component={LifeSkills} />
        <Stack.Screen name="ChildMinding" component={ChildMinding} />
        <Stack.Screen name="Cooking" component={Cooking} />
        <Stack.Screen name="Maintenance" component={GardenMaintenance} />
        <Stack.Screen name="Fees" component={Fees} />
        <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#a0a0a0',
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
}, 
button: {
   color: "#841584",
    marginTop: 10,
},
buttonContainer: {
  marginTop: 15,
},
buttonSpacing: {
  marginVertical: 8, // Adjust the spacing as needed
},
 title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
input: { 
    flex: 1, 
    height: 40, 
    borderColor: 'white', 
    borderWidth: 1, 
    paddingHorizontal: 10, 
},
mainPicture: {
  paddingTop: 40,
  justifyContent: 'center',
  alignItems: 'center',
},
ImageSize: {
  width: 350,
  height: 350,
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
},
checkbox: {
  margin: 8,
},
mapContainer: {
  marginVertical: 10,
},
map: {
  height: 200, // Set the height of each map
  width: '100%',
},
menuButton: {
  padding: 10,
  backgroundColor: 'red',
  borderRadius: 5,
},
menuButtonText: {
  color: 'white',
  fontWeight: 'bold',
},
dropdown: {
  position: 'absolute',
  top: 50, // Adjust this based on your design
  right: 15,
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#d3d3d3',
  borderRadius: 5,
  zIndex: 1, // Ensures dropdown is above other content
},
dropdownItem: {
  padding: 10,
},
dropdownText: {
  fontSize: 16,
},
});
