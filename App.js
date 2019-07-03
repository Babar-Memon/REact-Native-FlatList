// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import {View, Text, FlatList, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
// import CollapsibleList from 'react-native-collapsible-list'
// import { List, ListItem, SearchBar } from "react-native-elements";

// export default class App extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       collapseButtonText: 'Show More',
//       loading: false,
//       data: [],
//       page: 1,
//       seed: 1,
//       error: null,
//       refreshing: false
//     }
//   }

//   onCollapseListToggle (collapsed) {
//     if (collapsed) {
//       this.setState({ collapseButtonText: 'Show Less' })
//     } else {
//       this.setState({ collapseButtonText: 'Show More' })
//     }
//   }
//   componentDidMount() {
//     this.makeRemoteRequest();
//   }
  
//   makeRemoteRequest = () => {
//     const { page, seed } = this.state;
//     const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
//     this.setState({ loading: true });

//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: page === 1 ? res.results : [...this.state.data, ...res.results],
//           error: res.error || null,
//           loading: false,
//           refreshing: false
//         });
//       })
//       .catch(error => {
//         this.setState({ error, loading: false });
//       });
//   };

//   handleRefresh = () => {
//     this.setState(
//       {
//         page: 1,
//         seed: this.state.seed + 1,
//         refreshing: true
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   handleLoadMore = () => {
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "86%",
//           backgroundColor: "#CED0CE",
//           marginLeft: "14%"
//         }}
//       />
//     );
//   };

  



//   render () {
//     return (
//       <View style={styles.container}>
//         <ScrollView style={{flex: 1, padding: 10}}>
//           <CollapsibleList
//             numberOfVisibleItems={0}
//             animationConfig={{ duration: 300 }}
//             wrapperStyle={styles.wrapperCollapsibleList}
//             onToggle={(collapsed) => this.onCollapseListToggle(collapsed)}
//             buttonContent={
//               <View style={styles.button}>
//                 <Text style={styles.buttonText}>{this.state.collapseButtonText}</Text>
//               </View>
//             }
//           >
//           <View style={styles.collapsibleItem}>  
        
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//             <CollapsibleList
//             numberOfVisibleItems={0}
//             animationConfig={{ duration: 300 }}
//             wrapperStyle={styles.wrapperCollapsibleList}
//             onToggle={(collapsed) => this.onCollapseListToggle(collapsed)}
//             buttonContent={
//               <View style={styles.button}>
//                 <Text style={styles.buttonText}>CBL</Text>
//               </View>
//             }
//           >
//             <View style={styles.collapsibleItemInside}>
//             <ListItem
//               roundAvatar
//               title={`${item.name.first} ${item.name.last}`}
//               subtitle={item.email}
//               avatar={{ uri: item.picture.medium }}
//               containerStyle={{ borderBottomWidth: 0 }}
//             />
//             </View>
//           </CollapsibleList>
//           )}
//           keyExtractor={item => item.email}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//           ListFooterComponent={this.renderFooter}
//           onRefresh={this.handleRefresh}
//           refreshing={this.state.refreshing}
//           onEndReached={this.handleLoadMore}
//           onEndReachedThreshold={50}
//         />
     
//             </View>  
//           </CollapsibleList>
          
//         </ScrollView>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   flat: {  
//     flex: 1,  
// },  
// item: {  
//     padding: 10,  
 
    
// },  
//   container: {
//     flex: 1,
    
//     backgroundColor: 'rgba(0, 0, 0, 0.1)'
//   },
//   wrapperCollapsibleList: {
//     flex: 1,
//     marginTop: 20,
//     overflow: 'hidden',
//     backgroundColor: '#FFF',
//     borderRadius: 5
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#c2185b'
//   },
//   collapsibleItem: {
//     height: 400,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: '#CCC',
//     padding: 10
//   },
//   collapsibleItemInside:{
//     height: 50,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: '#CCC',
//     padding: 10
//   },
//   buttonText: {
//     color: '#FFF'
//   }
// })


import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
     
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
     
    );
  }
}

export default FlatListDemo;