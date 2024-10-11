import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, Text, ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AboutUs({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={{ flex: 1,}}>
      <Text>About Us</Text>
      <Text>The SME is an initiative by Precious Radebe to provide skills training for domestic workers and gardeners. Her parents and other elderly relatives
		were never given the chance to upskill themselves or follow a formal educational qualification, so this training school is her way of supporting
		similarly affected members from her community. The training she provides upskills domestic workers and gardeners by making them more
		marketable when seeking employment and enables them to be paid at a higher rate because of these additional skills. They can also be entrepreneurs
		and setup their own small business utilising these newly obtained skills. Many employers would like to have their employees upskilled to offer
		more skilled services to the household. Customers (employers or employees) can select from a range of courses available. They can select more than
		one course. They more courses the customers select the more discount they receive.</Text>
      <Button
        title="SIX-MONTH COURSES"
        onPress={() => navigation.navigate('6Months')}
      />
      <Button
        title="SIX-WEEK COURSES"
        onPress={() => navigation.navigate('6Weeks')}
      />
    </View>
    </ScrollView>
  );
}

function SixMonthCourses({navigation}) {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/logo.png')} alt="Logo" />
      <Text>Six Month Courses</Text>
      
      <Button
        title="FIRST AID"
        onPress={() => navigation.navigate('FirstAid')}
      />
      <Button
        title="SEWING"
        onPress={() => navigation.navigate('Sewing')}
      />
      <Button
        title="LANDSCAPING"
        onPress={() => navigation.navigate('Landscaping')}
      />
      <Button
        title="LIFE SKILLS"
        onPress={() => navigation.navigate('LifeSkills')}
      />

    </View>
  );
}

function SixWeekCourses({navigation}) {
  return (
    <View style={{ flex: 1,}}>
      <Text>Six Week Courses</Text>
      
      <Button
        title="CHILD MINDING"
        onPress={() => navigation.navigate('ChildMinding')}
      />
      <Button
        title="COOKING"
        onPress={() => navigation.navigate('Cooking')}
      />
      <Button
        title="GARDEN MAINTENANCE"
        onPress={() => navigation.navigate('Maintenance')}
      />

    </View>
  );
}

function FirstAid() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/firstaid.jpeg')} alt="Logo" />
      <Text>First Aid</Text>
      <Text>Fees: R1500
	Purpose: To provide first aid awareness and basic life support
	Content:
	<ul>
	<li>Wounds and bleeding</li>
	<li>Burns and fractures</li>
	<li>Emergency scene management</li>
	<li>Cardio-Pulmonary Resuscitation (CPR)</li>
	<li>Respiratory distress e.g., Choking, blocked airway</li>
	</ul></Text>
  
    </View>
  );
}

function Sewing() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/sewing.jpeg')} alt="Sewing" />
      <Text>Sewing</Text>
      <Text>Fees: R1500
	Purpose:  To provide alterations and new garment tailoring services
	Content:
	<ul>
	<li>Types of stitches</li>
	<li>Threading a sewing machine</li>
	<li>Sewing buttons, zips, hems and seams</li>
	<li>Alterations</li>
	<li>Designing and sewing new garments</li>
	</ul></Text>
    </View>
  );
}

function Landscaping() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/landscaping.jpeg')} alt="Landscaping" />
      <Text>Landscaping</Text>
      <Text>Fees: R1500
	Purpose:  To provide landscaping services for new and established gardens
	Content:
	<ul>
	<li>Indigenous and exotic plants and trees</li>
	<li>Fixed structures (fountains, statues, benches, tables, built-in braai)</li>
	<li>Balancing of plants and trees in a garden</li>
	<li>Aesthetics of plant shapes and colours</li>
	<li>Garden layout</li>
	</ul></Text>
  
    </View>
  );
}

function LifeSkills() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/lifeskills.jpeg')} alt="Life Skills" />
      <Text>Life Skills</Text>
      <Text>Fees: R1500
	Purpose:  To provide landscaping services for new and established gardens
	Content:
	<ul>
	<li>Opening a bank account</li>
	<li>Basic labour law (know your rights)</li>
	<li>Basic reading and writing literacy</li>
	<li>Basic numeric literacy</li>
	</ul></Text>
  
    </View>
  );
}

function ChildMinding() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/childminding.png')} alt="Child Minding" />
      <Text>Child Minding</Text>
      <Text>Fees: R750
	Purpose: To provide basic child and baby car
	Content:
	<ul>
	<li>birth to six-month old baby needs</li>
	<li>seven-month to one year old needs</li>
	<li>Toddler needs</li>
	<li>Educational toys</li>
	</ul></Text>
  
    </View>
  );
}

function Cooking() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/cooking.jpeg')} alt="Cooking" />
      <Text>Cooking</Text>
      <Text>Fees: R750
	Purpose: To prepare and cook nutritious family meals
	Content:
	<ul>
	<li>Nutritional requirements for a healthy body</li>
	<li>Types of protein, carbohydrates and vegetables</li>
	<li>Planning meals</li>
	<li>Preparation and cooking of meals</li>
	</ul></Text>
  
    </View>
  );
}

function GardenMaintenance() {
  return (
    <View style={{ flex: 1,}}>
      <img src={require('assets/images/gardenmaintenance.png')} alt="Garden Maintenance" />
      <Text>Garden Maintenance</Text>
      <Text>Fees: R750
	Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden.
	Content:
	<ul>
	<li>Water restrictions and the watering requirements of indigenous and exotic plants</li>
	<li>Pruning and propagation of plants</li>
	<li>Planting techniques for different plant types</li>
	</ul></Text>
  
    </View>
  );
}

function Fees() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={{ flex: 1,}}>
      <Text>Total Fees</Text>
      <View style={styles.container}>  

        <View style={styles.inputContainer}> 
            <TextInput 
              style={styles.input} 
              placeholder="Enter Name" 
              value={name} 
              onChangeText={setName} 

            /> 
            <TextInput 
              style={styles.input} 
              placeholder="Enter Surname" 
              value={surname} 
              onChangeText={setSurname} 

            />
            <TextInput 
              style={styles.input} 
              placeholder="Enter Email" 
              value={email} 
              onChangeText={setEmail} 

            />
        </View>
      </View>
    </View>
  );
}

function Contact() {
  return (
    <View style={{ flex: 1,}}>
      <Text>Contact Us</Text>
      <Text> 
      Phone: 123-456-7890
      Email: info@empoweringthenation.com
      Our Venues in Johannesburg
      <ul>
        <li>123 Elm St, Johannesburg Central</li>
        <li>456 Oak St, Sandton</li>
        <li>789 Pine St, Randburg</li>
      </ul>
	  </Text>
  
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
}, 
input: { 
    flex: 1, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 10, 
},
});
