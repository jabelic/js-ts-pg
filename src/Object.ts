export const objs = ()=>{
    const target = {
        name: 'tommykw',
        location: 'tokyo',
        child: "a",
        hoge: 'd'
    };
    const source = {
        name: 'tommykw',
        location: 'kobe',
        child: "b",
        huga: 'd'
    };
    Object.assign(target, source);
    console.log(target); // { name: 'tommykw', location: 'kobe', child: 'b', hoge: 'd', huga: 'd' }
    console.log(source); // { name: 'tommykw', location: 'kobe', child: 'b', huga: 'd' }
}