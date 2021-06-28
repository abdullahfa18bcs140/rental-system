export const Gas = { Yes: 1, No : 2, Dk: 3, } 
export const Electricty = { Yes: 1, No: 2, Dk: 3, } 
export const Colors = { purple: '#700000', red: '#700000', orange: '#700000', amber: '#700000', blue: '#700000', green : '#700000', lightBlue : '#700000', lightGreen : '#700000', pink : '#700000', teal : '#700000', } 
export const Property_Category = [ { id: 'c1', title: 'Villas', color: Colors.purple, }, { id: 'c2', title: '2 Bed Room Apartments', color: Colors.red, }, { id: 'c3', title: 'Flats', color: Colors.orange, }, { id: 'c4', title: '1 Kanal Plot', color: Colors.amber, }, { id: 'c5', title: '2 Kanal Plots', color: Colors.blue, }, { id: 'c6', title: '4 Kanal Plots', color: Colors.green, }, { id: 'c7', title: '3 Bed Room Apartments', color: Colors.lightBlue, }, { id: 'c8', title: '10 Marla House', color: Colors.lightGreen, }, { id: 'c9', title: '5 Marla House', color: Colors.pink, }, { id: 'c10', title: 'Undeveloped Plot', color: Colors.teal, } ]; 
export const Properties = [ { id: 'm1', categories: [ 'c1' ], title: 'DHA Villa', electricity: Electricty.Yes, gas: Gas.Yes, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 20, Owner: [ 'Nawaz Shareef' ], Address: [ '289 Y Block Phase 3 Dha Lahore.' ],     isFav:false}, { id: 'm2', categories: [ 'c2', ], title: 'Karim Block 2 Bed Apartment', electricity: Electricty.Yes, gas: Gas.Yes, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 10, Owner: [ 'Nawaz Shareef' ], Address: [ '312 Karim Block Lahore' ],     isFav:false}, { id: 'm3', categories: [ 'c3' ], title: 'Classic 1 Room Flat', electricity: Electricty.No, gas: Gas.Yes, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 45, Owner: [ 'Nawaz Shareef' ], Address: [ 'Ayaz Apartment Building Sheikhupura Lahore' ],  isFav:false}, { id: 'm4', categories: [ 'c4' ], title: 'Model Town 1 Kanal Plot', electricity: Electricty.Dk, gas: Gas.No, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 60, Owner: [ 'Nawaz Shareef' ], Address: [ '283-B Model Town Lahore' ],    isFav:false }, { id: 'm5', categories: [ 'c5' ], title: 'Wapda Town 2 Kanal Plot', electricity: Electricty.Dk, gas: Gas.Yes, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 15, Owner: [ 'Nawaz Shareef' ],    isFav:true,Address:['543 J2 Wapda Town Lahore'] }, { id: 'm6', categories: [ 'c6' ], title: 'Johar Town 6 Kanal Plot', electricity: Electricty.Yes, gas: Gas.Dk, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 240, Owner: [ 'Nawaz Shareef', ], Address: [ '765 G3 Johar Town Lahore', ],     isFav:true}, { id: 'm7', categories: [ 'c7' ], title: 'Askari 6 3 Room Apartment', electricity: Electricty.Yes, gas: Gas.Yes, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 20, Owner: [ 'Nawaz Shareef', ], Address: [ '67 D Askari 6 Lahore.' ],     isFav:true}, { id: 'm8', categories: [ 'c8' ], title: 'MughalPura 10 Marla House', electricity: Electricty.No, gas: Gas.No, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 35, Owner: [ 'Nawaz Shareef', ], Address: [ '23-C Mughalpura Lahore' ],    isFav:true }, { id: 'm9', categories: [ 'c9', ], title: 'Muslim Town 5 Marla House', electricity: Electricty.Yes, gas: Gas.Dk, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 45, Owner: [ 'Nawaz Shareef', ], Address: [ '143-C Muslim Town Lahore', ],     isFav:true}, { id: 'm10', categories: [  'c10', ], title: 'Garden Town Undeveloped Plot', electricity: Electricty.Dk, gas: Gas.Yes, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl4PZ9ZGJSkJqKcBUH7Z5UBFGRRNxrVulrw&usqp=CAU', duration: 30, Owner: [ 'Nawaz Shareef' ], Address: [ '92-G Garden Town Lahore' ],     isFav:true}, ];