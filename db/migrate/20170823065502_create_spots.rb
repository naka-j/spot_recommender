# coding: utf-8
class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
