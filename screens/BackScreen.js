import React, { useState } from 'react';
import { StyleSheet, Share, FlatList, View, Text, TextInput as Input, Button } from 'react-native';

import data from '../data/questions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Utils from '../utils/utils';
const ShareItem = async (item) => {
    try {
        const result = await Share.share({
            message: `
Question: ${item.question}
\n
Type: ${item.tags.join(',')}
\n
Answer: ${item.answer}... 
\n
Good To Hear: ${item.goodToHear.join(',\n')}
            `,
            title: item.title
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
}
const renderItem = (item, expandAll) => {

    return (<View style={{
        margin: 12,
        backgroundColor: '#ffffff',
        elevation: 2,
        borderRadius: 10,
        opacity: 1,
    }}>
        <View style={{ flexDirection: 'row', padding: 8 }} >
            <View style={{ alignItems: 'flex-start', flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#392f31' }} selectable>
                    {item.question ? item.question : ''}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                    {item.tags.map((tag) => (
                        <Text style={{ fontSize: 14, color: '#616b8f', }}>{tag.charAt(0).toUpperCase() + tag.substr(1).toLowerCase()}, </Text>
                    ))}
                </View>
            </View>

            <TouchableOpacity onPress={() => ShareItem(item)} style={{ borderRadius: 100, alignSelf: 'flex-end', padding: 8, backgroundColor: '#fff' }}>
                <MaterialIcons name="share" size={30}></MaterialIcons>
            </TouchableOpacity>
        </View>
        {expandAll && (
            <View>
                <View style={{ padding: 8 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Answer</Text>
                    <Text style={{ fontSize: 16, marginTop: 12, fontWeight: '400', color: '#392f31' }} selectable>
                        {item.answer}
                    </Text>
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Good To Hear</Text>
                    {item.goodToHear.map((text) => (
                        <Text style={{ fontSize: 16 }} selectable>{text}, </Text>
                    ))}
                </View>
            </View>
        )}
    </View>
    )
};
const _keyExtractor = item => item.id;
export default InterviewScreen = () => {

    const [originalSnippets, setOriginalSnippets] = useState(data);
    const [snippets, setSnippets] = useState(data);
    const [expandAll, setExpandAll] = useState(true);
    const search = (searchText) => {
        setSnippets(snippets => searchText ? Utils.filterArrayByString(originalSnippets, searchText) : originalSnippets)
    };
    return (
        <View style={styles.container}>
            <View>
                <Input placeholder="Search"
                    onChangeText={search}
                    style={{
                        alignItems: 'center',
                        margin: 10,
                        color: '#000',
                        padding: 10,
                        borderBottomWidth: 2,
                        borderBottomColor: '#ddd',
                        opacity: 1,
                        backgroundColor: '#ffffff'
                    }}
                />
            </View>
            <TouchableOpacity onPress={() => setExpandAll(!expandAll)} style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 8 }}>
                {expandAll ? <React.Fragment><MaterialIcons name="expand-less" size={30}></MaterialIcons><Text> Collapse Cards</Text></React.Fragment> : <React.Fragment><MaterialIcons name="expand-more" size={30}></MaterialIcons><Text> Expand Cards</Text></React.Fragment>}
            </TouchableOpacity>
            <FlatList
                data={snippets}
                renderItem={({ item }) => renderItem(item, expandAll)}
                keyExtractor={_keyExtractor}
                ListEmptyComponent={<View style={{ paddingTop: 300, justifyContent: 'center', alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 36, fontWeight: '600' }}>Nothing Found</Text></View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 228,
    },
});