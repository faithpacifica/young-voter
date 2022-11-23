<template lang="">
  <div
    class="modal fixed z-[99] top-0 left-0 w-[100%] h-[100%] bg-[#0D2144] text-[#fff] transition duration-300 ease-in-out table"
    v-show="(volunteerModal = true)"
  >
    <div class="modal__wrapper" v-if="succesfully == false">
      <div class="modal__inner">
        <div class="modal__container">
          <div class="mb-[40px]">
            <div class="flex justify-center items-center mb-[19px] gap-[13px]">
              <svg
                width="34"
                height="30"
                viewBox="0 0 34 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9965 7.97449C24.6026 4.41468 29.0817 1.68686 33.9973 0.393867C34.0027 3.54178 33.9973 6.69241 34 9.84305C29.6546 11.5588 25.8274 14.5022 22.9905 18.2038C19.8862 18.1574 16.782 18.2038 13.6804 18.1684C15.8518 21.6627 17.3466 25.5635 18.1104 29.6007C15.0744 29.6116 12.0356 29.6007 8.9995 29.6061C8.43757 24.4942 4.84775 19.9033 0.00314057 18.1656C0.0167797 14.9604 -0.024133 11.7525 0.0249678 8.54733C3.95576 9.22656 7.73652 11.0242 10.5216 13.913C11.7382 15.1459 12.7284 16.5753 13.615 18.0565C15.6227 14.3958 17.9686 10.8769 20.9965 7.97449Z"
                  fill="#319C68"
                />
              </svg>
              <slot name="header-title" />
            </div>
            <slot name="header-text" />
          </div>
          <div class="modal__body">
            <form
              class="register"
              @submit.prevent="submitForm"
              action=""
              method="get"
            >
              <div
                class="register__input-wrapper flex justify-between gap-[20px] mb-[24px]"
              >
                <span class="basis-[100%]">
                  <label class="opacity-70 block mb-[8px]">Ismingiz</label>
                  <input
                    v-model="name"
                    v-mask="'Aaaaaaaaaaaaaaaaaaaa'"
                    autocomplete="off"
                    :class="{ 'error-text': v$.name.$error }"
                    :maxlength="max"
                    class="register__input bg-[#ffffff1a] rounded-[8px] py-[12px] pl-[16px] w-[100%] border border-solid border-[#ffffff33]"
                    type="text"
                    placeholder="Ismingizni kiriting"
                    id="name"
                  />
                </span>
                <span class="basis-[100%]">
                  <label class="opacity-70 block mb-[8px]"
                    >Telefon raqamingiz</label
                  >
                  <input
                    v-model="tel"
                    :class="{ 'error-text': v$.tel.$error }"
                    v-mask="'+998(##)-###-##-##'"
                    placeholder="+998(88) 033-18-05"
                    class="register__input bg-[#ffffff1a] rounded-[8px] py-[12px] pl-[16px] w-[100%] border border-solid border-[#ffffff33]"
                    type="tel"
                    id=""
                  />
                </span>
              </div>
              <div class="mb-[24px]">
                <label class="opacity-70 block mb-[8px]">Hududingiz</label>
                <el-select
                  popper-class="register-select"
                  class="select w-[100%] bg-[#ffffff1a] rounded-[8px] w-[100%] border border-solid border-[#ffffff33]"
                  v-model="regionValue"
                  :class="{ 'error-text': v$.regionValue.$error }"
                  placeholder="Hududingizni tanlang"
                >
                  <el-option
                    class="register-select__option"
                    v-for="(item, index) in regionsData"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <div class="mb-[24px]">
                <div>
                  <label class="opacity-70 block mb-[8px]"
                    >Tumaningizni tanlang</label
                  >
                  <el-select
                    :disabled="regionValue == !true"
                    popper-class="register-select"
                    class="select bg-[#ffffff1a] rounded-[8px] w-[100%] border border-solid border-[#ffffff33]"
                    v-model="districtValue"
                    :class="{ 'error-text': v$.districtValue.$error }"
                    placeholder="Tumaningizni tanlang"
                  >
                    <el-option v-if="loading" class="register-select__option"
                      >Iltimos kuting!</el-option
                    >
                    <el-option v-else-if="error" class="register-select__option"
                      >Nosozlik yuzaga keldi,biz albatta bartaraf
                      etamiz.</el-option
                    >

                    <el-option
                      v-else
                      class="register-select__option"
                      v-for="item in districtsData"
                      :key="item.id"
                      :label="item.title"
                      :value="item.id"
                    />
                  </el-select>
                </div>
              </div>
              <div>
                <span class="message">
                  <label class="opacity-70 block mb-[8px] flex justify-between"
                    >Motivatsion xat
                    <span>{{ totalcharacter }} / 50</span></label
                  >
                  <textarea
                    :class="{ 'error-text': v$.message.$error }"
                    v-model="message"
                    @keyup="charCount()"
                    name="xat"
                    id="xat"
                    :maxlength="maxTextarea"
                    cols="30"
                    rows="5"
                    placeholder="Nima uchun ko‘ngilli bo‘lmoqchisiz? (kamida 50ta so‘z kiritilishi kerak)"
                    class="w-[100%] rounded-[8px] py-[12px] px-[16px] resize-none bg-[#ffffff1a] border border-solid border-[#ffffff33] outline-none"
                  ></textarea>
                </span>
              </div>
            </form>
          </div>
          <div>
            <button
              type="submit"
              @click="submitButton()"
              :disabled="disable()"
              :class="this.disabled ? 'bg-[#6B7486]' : 'bg-[#0083FF]'"
              class="m-[auto] rounded-[8px] w-[100%] py-[12px] mt-[24px] cursor-pointer"
            >
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="z-[1000]"
      v-else-if="succesfully == true"
      @click="$emit('close')"
    >
      <RegisterSucces :formInfo="this.formInfo" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import useVuelidate from "@vuelidate/core";
import RegisterSucces from "@/components/RegisterSucces";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { ElMessage } from 'element-plus'
export default {
    components: {
        RegisterSucces,
    },
    props: {
        volunteerModal: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        return {
            v$: useVuelidate(),
        };
    },
    validations() {
        return {
            tel: {
                required,
                minLength: minLength(18),
            },
            name: {
                required,
                maxLength: maxLength(20),
            },
            message: {
                required,
                minLength: minLength(50),
            },
            regionValue: {
                required,
            },
            districtValue: {
                required,
            },
        };
    },
    data() {
        return {
            id: null,
            tel: '+998',
            regionValue: '',
            districtValue: '',
            name: '',
            max: 20,
            maxTextarea: 200,
            message: '',
            totalcharacter: 0,
            succesfully: false,
            regionsData: [],
            districtsData: [],
            formInfo: [],
            loading: true,
            error: false,
            disabled:true
        };
    },

    methods: {
        charCount: function () {
            this.totalcharacter = this.message.split(" ").length;
        },
        disable: function(){
            this.v$.$validate();
            if (!this.v$.$error) {
              this.disabled = false
            }
        },
        async submitButton() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.message.split(' ').length > 50
                this.succesfully = true
            }else {
                ElMessage.error('Malumotlarni to\'liq kiriting!')
            }
            const article = {
                name: this.name,
                phone: this.tel,
                text: this.message,
                region: this.regionValue,
                district: this.districtValue
            };
            await axios.post('https://api.yoshsaylovchi.uz/api/v1/volunteer-create', article)
                .then((response) => {
                    this.formInfo = response.data
                })
                .catch((error) => {});
        },
        async fetchRegions() {
            await axios.get('https://api.yoshsaylovchi.uz/api/v1/region-list')
                .then((res) => {
                    this.regionsData = res.data
                })
                .catch((err) => {})
        },
        async regionsById() {
            await axios.get(`https://api.yoshsaylovchi.uz/api/v1/regions/${this.regionValue}/`)
                .then((res) => {
                    this.loading = false;
                    this.districtsData = res.data.districts;
                })
                .catch((err) => {
                    console.log(err.message)
                    this.loading = false;
                    this.error = true
                })
        },
    },
    watch: {
        regionValue() {
            this.regionsById()
        }
    },
    mounted() {
        this.fetchRegions()
    }
}
</script>

<style lang="scss">
.error-text {
  outline: 1px solid #eb4c42;
  white-space: nowrap;
}

.modal {
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__inner {
    height: 100vh;
    overflow-y: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  &__container {
    max-width: 590px;
    margin: 0px auto;
    padding: 32px;
    background-color: #061734;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &__body {
    .select {
      position: relative !important;
    }

    .select input {
      background-color: #ffffff00;
    }

    .el-input {
      line-height: 10px;
    }

    .el-input__inner {
      height: 44px;
      padding: 12px 0 12px 16px !important;
      box-shadow: none;
      border-radius: none;
      color: #fff;
    }

    .el-select .el-input.is-focus .el-input__inner {
      box-shadow: none !important;
    }

    .el-select .el-input__inner:focus {
      box-shadow: none !important;
    }

    .el-input__inner:hover {
      box-shadow: none !important;
      border: none !important;
      outline: none !important;
    }

    .register-select {
      z-index: 9999;
      top: 0 !important;
      left: 0 !important;
      overflow: hidden;
      background-color: #1e2e48;
      border: 1px solid #4b586d;
      box-shadow: 0px 6px 16px rgba(248, 248, 248, 0.08);
      min-width: 360px !important;
    }

    .el-select:hover:not(.el-select--disabled) .el-input__inner {
      box-shadow: none;
    }

    .el-input.is-disabled .el-input__inner {
      box-shadow: none;
      background-color: #ffffff00;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #4b586d;
    }

    input:focus {
      outline: 0.5px solid #fff;
      transition: all 0.3s ease;
    }
  }
}

.el-select-dropdown__wrap {
  background-color: #1e2e48;
}

.el-scrollbar__wrap {
  border-radius: 12px;
}

.el-select__popper.el-popper[role="tooltip"] {
  border: 1px solid #4b586d;
  border-radius: 12px;
}

.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: transparent !important;
}

.el-select-dropdown__item.selected {
  color: #fff !important;
}

.register-select__option:not(:last-child) {
  color: #93a3be;
  background-color: #1e2e48;
  height: 100%;
  border-bottom: 1px solid #4b586d;
  padding: 10px 0 !important;
}

.el-select-dropdown__list {
  margin: 0;
  padding: 0 20px !important;
  background-color: #1e2e48;

  border-radius: 12px;
}

.message {
  ::placeholder {
    font-size: 15px;
  }
}

.outline-none {
  outline-offset: inherit !important;
}

@media only screen and (max-width: 640px) {
  .modal-container {
    max-width: 100%;
  }

  .register__input-wrapper {
    flex-wrap: wrap;
  }

  .register__input {
    width: 100%;
  }
}
</style>
