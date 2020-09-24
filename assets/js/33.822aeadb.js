(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{383:function(e,t,n){"use strict";n.r(t);var l=n(0),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"user-info-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-info-example"}},[e._v("#")]),e._v(" User Info Example")]),e._v(" "),n("p",[e._v("Example inspired from "),n("a",{attrs:{href:"https://tailwindcss.com/components/forms#form-grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("tailwind"),n("OutboundLink")],1)]),e._v(" "),n("FormGridExample"),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n    <form class="w-full max-w-xl" @submit.prevent="onSubmit">\n        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">\n            <div class="flex flex-wrap -mx-3">\n                <div class="w-1/2 px-3">\n                    <CheckableGroup title="Title" :error="errors.title" direction="row">\n                        <Radio label="Mr" checkValue="mr" v-model="title" />\n                        <Radio label="Ms" checkValue="ms" v-model="title" />\n                        <Radio label="Mlle" checkValue="mlle" v-model="title" />\n                    </CheckableGroup>\n                </div>\n                <div class="w-1/2 px-3">\n                    <CheckableGroup title="Test" :error="errors.test" direction="row">\n                        <Checkbox label="a" checkValue="a"  v-model="test" />\n                        <Checkbox label="b" checkValue="b" v-model="test" />\n                        <Checkbox label="c" checkValue="c" v-model="test" />\n                    </CheckableGroup>\n                </div>\n                <div class="w-1/2 px-3">\n                    <TextInput type="text" placeholder="Jane" v-model="firstName" label="First Name" :error="errors.firstName"/>\n                </div>\n                <div class="w-1/2 px-3">\n                    <TextInput type="text" placeholder="Doe" v-model="lastName" label="Last Name" :error="errors.lastName" />\n                </div>\n            </div>\n            <TextInput id="password" type="password" placeholder="******************" v-model="password" label="Password" :error="errors.password" />\n\n            <div class="flex flex-wrap -mx-3">\n                <div class="px-3 w-1/3">\n                    <TextInput id="city" placeholder="Albuquerque" v-model="city" label="City" :error="errors.city" />\n                </div>\n                <div class="px-3 w-1/3">\n                    <Select v-model="state" label="State" :error="errors.state">\n                        <SelectOption value="mexico">New Mexico</SelectOption>\n                        <SelectOption value="missouri">Missouri</SelectOption>\n                        <SelectOption value="texas">Texas</SelectOption>\n                    </Select>\n                </div>\n                <div class="px-3 w-1/3">\n                    <TextInput id="zip" placeholder="90210" v-model="zip" label="Zip" :error="errors.zip" />\n                </div>\n            </div>\n            <Button type="submit">Submit</Button>\n        </div>\n    </form>\n</template>\n\n\n<script>\n    export default {\n        name: \'FormInfoExample\',\n        data() {\n            return {\n                title: \'mr\',\n                test: [\'a\', \'b\'],\n                firstName: \'\',\n                lastName: \'\',\n                password: \'\',\n                city: \'\',\n                state: \'\',\n                zip: \'\',\n                errors: {}\n            }\n        },\n        methods: {\n            onSubmit() {\n                const data = {\n                    title: this.title,\n                    test: this.test,\n                    firstName: this.firstName,\n                    lastName: this.lastName,\n                    password: this.password,\n                    city: this.city,\n                    state: this.state,\n                    zip: this.zip\n                }\n                console.log(data);\n            }\n        }\n    }\n<\/script>\n')])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);