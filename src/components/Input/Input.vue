<template>
    <div :class="'lc-input-container ' + compntClass">
        <Icon v-if="prevIcon"
              :iconClass="prevIcon"
              :color="prevIconColor"
              @click="handleIcon($event,'prevIconClick')"></Icon>
        <input :type="type"
               :value="value"
               :disabled="disabled"
               :class="' ' + inputClass"
               :placeholder="placeholder"
               :maxlength="maxlength"
               :minlength="minlength"
               @click="handle($event,'click')"
               @blur="handle($event,'blur')"
               @focus="handle($event,'focus')"
               @keyup="handle($event,'keyup')">
        <Icon v-if="afterIcon"
              :iconClass="afterIcon"
              :color="afterIconColor"
              @click="handleIcon($event,'afterIconClick')"></Icon>
    </div>
</template>

<script>
    import Icon from '@/components/Icon/Icon';

    export default {
        name: 'Input',
        props: {
            type: {
                type: String,
                required: true,
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: ''
            },
            maxlength: {
                default: 300
            },
            minlength: {
                default: 0
            },
            placeholder: {
                type: String,
                default: '请输入信息'
            },
            prevIcon: {
                type: String,
                default: ''
            },
            prevIconColor: {
                type: String,
                default: ''
            },
            afterIcon: {
                type: String,
                default: ''
            },
            afterIconColor: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        components: {
            Icon: Icon
        },
        data () {
            return {
                inputClass: '',
                compntClass: ''
            };
        },
        created () {
            this._checkInputComponent();
        },
        watch: {},
        methods: {
            _checkInputComponent () {
                let {prevIcon, afterIcon, disabled} = this.$props;
                if (prevIcon && afterIcon) {
                    this.inputClass = 'input-width2';
                } else if ((prevIcon && !afterIcon) || (!prevIcon && afterIcon)) {
                    this.inputClass = 'input-width1';
                } else {
                    this.inputClass = '';
                }
                if (disabled) {
                    this.compntClass = 'Input-gray';
                    this.inputClass = this.inputClass + ' input-gray';
                }
            },
            _emitToParent (e, type) {
                let {disabled} = this.$props;
                if (!disabled) {
                    this.$emit(type, e);
                }
            },
            handle (e, type) {
                this._emitToParent(e, type);
            },
            handleIcon (e, type) {
                this._emitToParent(e, type);
            }
        }
    };
</script>

<style scoped lang="scss">
    $light-gray: #eee;
    .lc-input-container {
        width: 100%;
        border: 1px solid #888;
        padding: 0 1px;
        border-radius: 6px;
        box-sizing: border-box;
        input {
            display: inline-block;
            width: 100%;
            font-size: 1rem;
            padding: 0.2rem 0.4rem;
            vertical-align: middle;
            box-sizing: border-box;
        }
        .input-width1 {
            width: calc(100% - 1rem - 3px);
        }
        .input-width2 {
            width: calc(100% - 2rem - 6px);
        }
        .input-gray {
            background: $light-gray;
        }
    }

    .Input-gray {
        background: $light-gray;
    }
</style>
