#coding:utf-8
class Message < ApplicationRecord
  scope :by_latitude, ->(lat_from, lat_to) {
    where(latitude: lat_from..lat_to)
  }

  scope :by_longitude, ->(lng_from, lng_to) {
    where(latitude: lng_from..lng_to)
  }
end
