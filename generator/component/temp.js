import <%= name %> from './<%= fileName %>.vue';


let <%= name %>Module = [
    { path: '<%= modulePath %>/<%= fileName %>', component: <%= name %> },
]
<%= name %>Module=<%= name %>Module.concat(

);

export default <%= name %>Module;