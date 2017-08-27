# coding: utf-8
class API::V1::SpotsController < ApplicationController
  def index
    render json: Spot.all
  end
end
