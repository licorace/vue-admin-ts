import { Module } from "vuex"

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard"

import { IDashboardState } from "./types"
import { IRootState } from "@/store/types"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(satte, list) {
      satte.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(satte, list) {
      satte.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(satte, list) {
      satte.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(satte, list) {
      satte.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataActions({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit("changeCategoryGoodsSale", categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)
      const addressGoodsSale = await getAddressGoodsSale()
      commit("changeAddressGoodsSale", addressGoodsSale.data)
    }
  }
}

export default dashboardModule
